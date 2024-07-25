<?php

namespace App\Interfaces\Services;

use App\Models\RealEstate;
use Illuminate\Support\Collection;

interface IRealEstateService
{
    public function getRealEstateMedia(Collection $realEstates): Collection;

    public function setRealEstateMedia(array $realEstates, RealEstate $realEstateModel): void;

    public function prepareData(array $validatedRequest): array;
}
