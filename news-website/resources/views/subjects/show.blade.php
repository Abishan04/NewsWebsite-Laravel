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
                                        <thead class="table-light">
                                        <th scope="col">ID</th>
                                        <th scope="col">Grade ID</th>
                                        <th scope="col">Admission No</th>
                                        <th scope="col">First Name</th>
                                        <th scope="col">Last Name</th>
                                        <th scope="col">Admission No</th>
                                        </thead>
                                    </tr>
                                       @foreach ($subject as $student)
                                       <tr>
                                           <td>{{ $student->id }}</td>
                                           <td>{{ $student->grade_id }}</td>
                                           <td>{{ $student->admission_no }}</td>
                                           <td>{{ $student->first_name }}</td>
                                           <td>{{ $student->last_name }}</td>
                                             <td>{{ $student->admission_no }}</td>

                                       </tr>
                                       @endforeach
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