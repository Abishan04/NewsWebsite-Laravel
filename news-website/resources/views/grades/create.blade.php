@extends('layouts.master')

@section('content')
<section class="wrap__section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card mx-auto " style="max-width: 380px;">
                    <div class="card-body bg-light rounded-3" style="box-shadow: 10px 10px 5px #888;">
                        <h4 class="card-title mb-4">Create Grade</h4>
                        <form action="/grades" method="post">
                            @csrf
                            <div class="form-group form-floating">
                                <input class="form-control" name="grade_name" id="grade_name"
                                    placeholder="Enter grade name" type="text">
                                <label for="grade_name">Grade </label>
                            </div>
                         <div class="mb-3">
                                <label for="grade_color" class="form-label">Grade Color</label>
                                <div class="d-flex align-items-center gap-3">
                                    <input type="color" class="form-control form-control-color" name="grade_color" id="grade_color">
                                </div>
                                </div>
                                 <div class="form-group form-floating">
                                <input class="form-control" name="grade_order" id="grade_order"
                                    placeholder="Enter grade order" type="number" min="1">
                                <label for="grade_name">Grade Order</label>
                            </div>
   
                          <div class="form-floating mb-3">
                            <select name="grade_group" id="grade_group" class="form-select" >
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12" >12</option>
                            </select>
                            <label for="grade_group">Grade Group</label>
                            </div>
                            
                   
                            <div class="form-group">
                                <input type="submit" class="btn btn-outline-primary btn-block" value="Create">
                            </div>
                            <div class="form-group">
                                <a href="/grades" class="btn btn-outline-success btn-block">Back</a>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection