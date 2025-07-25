@extends('layouts.master')

@section('content')
<section class="wrap__section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card mx-auto " style="max-width: 380px;">
                    <div class="card-body bg-light rounded-3" style="box-shadow: 10px 10px 5px #888;">
                        <h4 class="card-title mb-4">Edit Subject</h4>
                        <form action="/subjects/{{ $subject->id }}" method="post">
                            @csrf
                            @method('put')
                            <div class="form-group form-floating">
                                <input class="form-control" name="subject_name" id="subject_name"
                                    placeholder="Enter subject name" type="text" value="{{ $subject->subject_name }}">
                                <label for="subject_name">Subject </label>
                            </div>
                            <div class="form-group form-floating">
                                <input class="form-control" name="subject_index" id="subject_index"
                                    placeholder="Enter subject index" type="text" value="{{ $subject->subject_index }}">
                                <label for="subject_index">Subject Index</label>
                            </div>
                                 <div class="form-group form-floating">
                                <input class="form-control" name="subject_order" id="subject_order"
                                    placeholder="Enter subject order" type="number" min="1" value="{{ $subject->subject_order }}">
                                <label for="subject_order">Subject Order</label>
                            </div>
   
                          <div class="form-floating mb-3">
                            <select name="subject_type" id="subject_type" class="form-select" >
                              <option value="Mandatory" {{ $subject->subject_type == 'Mandatory' ? 'selected' : '' }}>Mandatory</option>
                            <option value="Optional" {{ $subject->subject_type == 'Optional' ? 'selected' : '' }}>Optional</option>
                            </select>
                            <label for="subject_type">Subject Type</label>
                            </div>
                            
                   
                            <div class="form-group">
                                <input type="submit" class="btn btn-outline-primary btn-block" value="Update">
                            </div>
                              <div class="form-group">
                                <a href="/subjects" class="btn btn-outline-success btn-block">Back</a>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection