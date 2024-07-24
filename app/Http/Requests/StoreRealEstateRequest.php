<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class StoreRealEstateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'shortDescription' => ['required', 'string', 'max:500'],
            'longDescription' => ['required', 'string', 'max:1500'],
            'address' => ['required', 'array'],
            'address.*' => ['required', 'string', 'max:255'],
            'parameters' => ['nullable','array'],
            'media' => ['nullable', 'array'],
        ];
    }
}
