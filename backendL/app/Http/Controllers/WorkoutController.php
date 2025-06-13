<?php

namespace App\Http\Controllers;

use App\Models\Workout;
use Illuminate\Http\Request;

class WorkoutController extends Controller
{
    public function index()
    {
        return response()->json(Workout::all());
    }

    public function store(Request $request)
    {
        $workout = Workout::create($request->all());
        

        $validatedData = $request->validate([
            'sleepQuality' => 'required|string',
            'energyLevel' => 'required|string',
            'mood' => 'required|string',
            'goal' => 'required|string',
            'goalCustom' => 'nullable|string',
            'additionalComments' => 'nullable|string',
            'exerciseType' => 'required|string',
        ]);
        
        $workout = Workout::create($validatedData);

      
        return response()->json($workout, 201);
    }
}
