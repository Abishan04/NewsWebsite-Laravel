@extends('layouts.master')

@section('title', 'Login')
@push('styles')
<style>
    #title {
        color: #1bded7ff;
    }
</style>
@endpush

@section('content')
    <section class="wrap__section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card mx-auto" style="max-width: 380px;">
                        <div class="card-body">
                            <h4 class="card-title mb-4">Create Student</h4>
                            <form action="/student" method="post">
                            @csrf
                                <div class="form-group">
                                    <input class="form-control" name="fname" id="fname" placeholder="Enter student first name" type="text">
                                </div>
                                <div class="form-group">
                                    <input class="form-control"  name="lname" id="lname" placeholder="Enter student last name" type="text">
                                </div>

                             
                                <div class="form-group">
                                    <input type="submit" class="btn btn-primary btn-block" value="Submit"> 
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection