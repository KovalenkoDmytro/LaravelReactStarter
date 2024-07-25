<?php

namespace App\Services;

use App\Interfaces\Services\IRealEstateService;
use Illuminate\Support\Collection;

class RealEstateService implements IRealEstateService
{
    public function getRealEstateMedia(Collection $realEstates): Collection
    {

        $realEstates->map(function ($realEstate) {
            $media = $realEstate->getMedia('realEstates');

            return $realEstate['media'] = $media;
        });

        return $realEstates;
    }
}
