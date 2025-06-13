<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use App\Models\ExerciseSuggestion;

class GeminiController extends Controller
{
    // Méthode pour soumettre le formulaire sans validation stricte
    public function submitExercise(Request $request)
    {
        $inputData = $request->all();  // Accepte toutes les données du frontend

        // Appel à l'API Gemini pour obtenir une suggestion
        $exerciseSuggestion = $this->callGeminiForExercise($inputData);

        if ($exerciseSuggestion) {
            // Récupère le texte de la suggestion dans la réponse Gemini
            $text = $exerciseSuggestion['candidates'][0]['content']['parts'][0]['text'] ?? 'Aucune suggestion générée';

            // Sauvegarde dans la base de données
            ExerciseSuggestion::create([
                'user_input' => $inputData,
                'suggestion' => $text,
            ]);

            return response()->json([
                'message' => 'Suggestion enregistrée avec succès',
                'exerciseSuggestion' => $text,
            ], 200);
        }

        return response()->json([
            'message' => 'Erreur lors de l\'appel à l\'API Gemini.',
        ], 500);
    }

    // Appel de l'API Gemini
    private function callGeminiForExercise($data)
    {
        $apiKey = 'AIzaSyAeV4v7iNGyK60r-ZAN-MMjV_pndLWvi-I';
        $apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=$apiKey";
        
        $prompt = "Voici les données utilisateur :

        Qualité du sommeil : {$data['sleepQuality']}
        Niveau d'énergie : {$data['energyLevel']}
        Humeur : {$data['mood']}
        Objectif principal : {$data['goal']}
        Objectif personnalisé : {$data['goalCustom']}
        Commentaires supplémentaires : {$data['additionalComments']}
        Type d'exercice préféré : {$data['exerciseType']}
        
        Rédige une réponse professionnelle, claire et motivante. Commence par 'Bonjour' ou 'Bonsoir' selon l'heure du jour (sans justifications). Puis, propose une suggestion d'exercice personnalisée, structurée en paragraphes ou avec des tirets. 
        Utilise les retours à la ligne (\n) ou des séparateurs comme ' | ' au lieu de '***', et évite tout style trop décoratif. Sois humain, concis et positif.";
        

        // Appel à l'API Gemini
        $response = Http::post($apiUrl, [
            'contents' => [
                ['parts' => [['text' => $prompt]]],
            ],
        ]);

        if ($response->successful()) {
            return $response->json();
        }

        
        Log::error('Erreur Gemini API', [
            'status' => $response->status(),
            'body' => $response->body(),
        ]);

        return null;
    }
    public function getAllSuggestions()
{
    $suggestions = ExerciseSuggestion::all();
    return response()->json($suggestions);
}
public function deleteSuggestion($id)
{
    $suggestion = ExerciseSuggestion::find($id);

    if (!$suggestion) {
        return response()->json(['message' => 'Suggestion non trouvée'], 404);
    }

    $suggestion->delete();

    return response()->json(['message' => 'Suggestion supprimée avec succès']);
}

}
