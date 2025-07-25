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
                            <table class="table table-bordered bg-dark text-white  text-center mb-0">
                                <thead class="">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Subject Name</th>
                                        <th scope="col">Subject Index</th>
                                        <th scope="col">Subject Order</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ $subject->id }}</td>
                                        <td>{{ $subject->subject_name }}</td>
                                        <td>{{ $subject->subject_index }}</td>
                                        <td>{{ $subject->subject_order }}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                  <div style="display: flex; justify-content: center;">
                 <a href="/students" class="btn btn-success mt-3 mx-auto text-center text-white">Back</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection