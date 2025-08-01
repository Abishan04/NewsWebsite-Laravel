@extends('layouts.master')

@section('title', 'Index')

@section('content')
<section class="wrap__section ">
    <div class="container ">
        <div class="row ">
            <div class="col-md-12 ">
                <div class="card mx-auto shadow bg-primary ">
                    <div class="card-body">
                        <h4 class="card-title text-center text-white mb-4">Index Students List</h4>

                        <div class="table-responsive text-nowrap">
                            <table class="table table-bordered bg-dark text-white  text-center mb-0">
                                <thead class="table-light">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Grade</th>
                                         <th scope="col" >Admission No</th>
                                        <th scope="col">Firstname</th>
                                        <th scope="col">Lastname</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Telephone No</th>
                                        <th scope="col">NIC No</th>
                                        <th scope="col">Date Of Birth</th>
                                        <th scope="col">Address</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Updated At</th>
                                        <th colspan="3" scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($students as $student)
                                        <tr>
                                            <td>{{ $student->id }}</td>
                                            <td>{{ $student->grade->grade_name }}</td>
                                            <td>{{ $student->admission_no }}</td>
                                            <td>{{ $student->first_name }}</td>
                                            <td>{{ $student->last_name }}</td>
                                            <td>{{ $student->gender }}</td>
                                            <td>{{ $student->telephone_no }}</td>
                                            <td>{{ $student->nic_no }}</td>
                                            <td>{{ $student->date_of_birth }}</td>
                                            <td>{{ $student->address }}</td>
                                            <td>{{ $student->created_at }}</td>
                                            <td>{{ $student->updated_at }}</td>

                                            <td><a href="/students/{{ $student->id }}" class="btn btn-success btn-sm">Show</a></td>
                                            <td><a href="/students/{{ $student->id }}/edit" class="btn btn-primary btn-sm">Edit</a></td>
                                            <td>
                                                <form action="/students/{{ $student->id }}" method="post">
                                                    @csrf
                                                    @method('delete')
                                                    <button type="submit" class="btn btn-danger btn-sm">Delete</button>
                                                </form>
                                            </td>
                                        </tr>       
                                    @endforeach
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                 {{-- <div class="d-flex justify-content-center">
  <a href="/students/create" class="btn btn-info mt-3 text-white btn-block">Create</a>
</div> --}}
            </div>
        </div>
    </div>
</section>
@endsection