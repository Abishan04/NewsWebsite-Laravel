@extends('layouts.master')

@section('content')
<section class="wrap__section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12 ">
                <div class="card mx-auto" style="max-width: 380px;">
                    <div class="card-body bg-light rounded-3" style="box-shadow: 10px 10px 5px #888;">
                        <h4 class="card-title mb-4">Edit Student</h4>
                        <form action="/grades/{{ $grade->id }}" method="post">
                            @csrf
                            @method('put')
                            <div class="form-group form-floating">
                                <input class="form-control" name="grade_name" id="grade_name"
                                    placeholder="Enter grade name" type="text" value="{{ $grade->grade_name }}">
                                <label for="grade_name">Grade </label>
                            </div>
                         <div class="mb-3">
                                <label for="grade_color" class="form-label">Grade Color</label>
                                <div class="d-flex align-items-center gap-3">
                                    <input type="color" class="form-control form-control-color" name="grade_color" id="grade_color" value="{{ $grade->grade_color }}">
                                </div>
                                </div>
                                 <div class="form-group form-floating">
                                <input class="form-control" name="grade_order" id="grade_order"
                                    placeholder="Enter grade order" type="number" min="1" value="{{ $grade->grade_order }}">
                                <label for="grade_name">Grade Order</label>
                            </div>
   
                          <div class="form-floating mb-3">
                            <select name="grade_group" id="grade_group" class="form-select" >
                                <option value="10" {{ $grade->grade_group == '10' ? 'selected' : '' }}>10</option>
                                <option value="11"{{ $grade->grade_group == '11' ? 'selected' : '' }}>11</option>
                                <option value="12" {{ $grade->grade_group == '12' ? 'selected' : '' }}>12</option>
                            </select>
                            <label for="grade_group">Grade Group</label>
                            </div>
                            
                   
                            <div class="form-group">
                                <input type="submit" class="btn btn-outline-warning btn-block" value="Update">
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