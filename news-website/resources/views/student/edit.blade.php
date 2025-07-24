@extends('layouts.master')

@section('content')
    <section class="wrap__section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card mx-auto" style="max-width: 380px;">
                        <div class="card-body bg-light  shadow rounded-3 ">
                            <h4 class="card-title mb-4">Edit Student</h4>
                            <form action="/student/10" method="post">
                            @csrf
                            @method('put')
                                <div class="form-group">
                                    <input class="form-control" name="fname" id="fname"  type="text">
                                </div>
                                <div class="form-group">
                                    <input class="form-control"  name="lname" id="lname"  type="text">
                                </div>

                             
                                <div class="form-group">
                                    <input type="submit" class="btn btn-outline-primary btn-block" value="Update"> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection