@extends('layouts.master')

@section('title', 'Index')

@section('content')
<section class="wrap__section ">
    <div class="container ">
        <div class="row ">
            <div class="col-md-12 ">
                <div class="card mx-auto shadow bg-primary ">
                    <div class="card-body">
                        <h4 class="card-title text-center text-white mb-4">Show Subject</h4>

                        <div class="table-responsive text-nowrap">
                            <table class="table table-bordered table-dark text-white table-hover text-center mb-0">
                                <tbody>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <td>{{ $subject->id }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Subject Name</th>
                                        <td>{{ $subject->subject_name }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Subject Index</th>
                                        <td>{{ $subject->subject_index }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Subject Order</th>
                                        <td>{{ $subject->subject_order }}</td>
                                    </tr>                                 
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                  <div style="display: flex; justify-content: center;">
                 <a href="/subjects" class="btn btn-success mt-3 mx-auto text-center text-white">Back</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection