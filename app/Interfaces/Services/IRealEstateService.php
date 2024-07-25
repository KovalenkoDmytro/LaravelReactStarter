<?php

namespace App\Interfaces\Services;

use Illuminate\Support\Collection;

interface IRealEstateService
{
    public function getRealEstateMedia(Collection $realEstates): Collection;
}
