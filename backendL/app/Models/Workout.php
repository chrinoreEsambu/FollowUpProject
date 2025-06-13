<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class Workout extends Model
{

    protected $fillable = [
        'exerciseName', 'date', 'duration', 'sets', 'reps', 'weight',
        'exerciseType', 'intensity', 'notes'
    ];
}
