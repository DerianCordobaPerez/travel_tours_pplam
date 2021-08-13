<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

/**
 * @property mixed | string id
 * @property mixed | string name
 * @mixin Builder
 */
class Location extends Model {
    use HasFactory;

    /**
     * Atributos asignables
     * 
     * @var array
     */
    protected $fillable = ['name'];

}
