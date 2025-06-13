<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ExerciseSuggestion extends Model
{
    protected $fillable = [
        'user_input',
        'suggestion',
    ];

    protected $casts = [
        'user_input' => 'array', 
    ];
}
