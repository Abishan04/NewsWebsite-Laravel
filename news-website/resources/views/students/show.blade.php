@extends('layouts.master')

@section('content')
<section class="wrap__section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card mx-auto shadow bg-primary">
                    <div class="card-body">
                        <h4 class="card-title text-center text-white mb-4">Show Student List</h4>

                        <div class="table-responsive text-nowrap">
                            <table class="table table-bordered table-hover text-center mb-0 table-dark text-white">                                
                                <tbody>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <td>{{ $student->id }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Admission No</th>
                                        <td>{{ $student->admission_no }}</td>
                                    </tr>

                                    <tr>
                                        <th scope="col">Firstname</th>
                                        <td>{{ $student->first_name }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Lastname</th>
                                        <td>{{ $student->last_name }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Gender</th>
                                        <td>{{ $student->gender }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Telephone No</th>
                                        <td>{{ $student->telephone_no }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">NIC No</th>
                                        <td>{{ $student->nic_no }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Date Of Birth</th>
                                        <td>{{ $student->date_of_birth }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="col">Address</th>
                                        <td>{{ $student->address }}</td>    
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