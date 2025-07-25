@extends('layouts.master')

@section('content')
<section class="wrap__section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card mx-auto " style="max-width: 380px;">
                    <div class="card-body  bg-light rounded-3" style="box-shadow: 10px 10px 5px #888;">
                        <h4 class="card-title mb-4">Create Subject</h4>
                        <form action="/subjects" method="post">
                            @csrf
                            <div class="form-group form-floating">
                                <input class="form-control" name="subject_name" id="subject_name"
                                    placeholder="Enter subject name" type="text">
                                <label for="subject_name">Subject </label>
                            </div>
                            <div class="form-group form-floating">
                                <input class="form-control" name="subject_index" id="subject_index"
                                    placeholder="Enter subject index" type="text">
                                <label for="subject_index">Subject Index</label>
                            </div>
                                 <div class="form-group form-floating">
                                <input class="form-control" name="subject_order" id="subject_order"
                                    placeholder="Enter subject order" type="number" min="1">
                                <label for="subject_order">Subject Order</label>
                            </div>
   
                          <div class="form-floating mb-3">
                            <select name="subject_type" id="subject_type" class="form-select" >
                              <option value="Mandatory">Mandatory</option>
<option value="Optional">Optional</option>
                            </select>
                            <label for="subject_type">Subject Type</label>
                            </div>
                            
                   
                            <div class="form-group">
                                <input type="submit" class="btn btn-outline-primary btn-block" value="Create">
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