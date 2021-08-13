<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property mixed | string id
 * @property mixed | string name
 * @property mixed | string subject
 * @property mixed | string description
 * @mixin Builder
 */
class Commerce extends Model {
    use HasFactory;

    /**
     * Atributos asignables
     * 
     * @var array
     */
    protected $fillable = ['name', 'subject', 'description'];

}
