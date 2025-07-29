@extends('layouts.master')

@section('content')
<section class="py-4">
    <div class="container">
        <div class="card bg-primary col-md-10 mx-auto shadow">
            <div class="card-body col-md-10 mx-auto">
                <h4 class="card-title text-center text-white my-3">Show Students List</h4>

                <!-- Student Table -->
                <div class="table-responsive ">
                    <table class="table table-bordered table-hover table-dark text-center ">
                        <thead class="table-light">
                            <tr>
                                <th>ID</th>
                                <th>Grade ID</th>
                                <th>Admission No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Admission No</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($student as $student)
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
                <h4 class="card-title text-center text-white my-3">Show Subjects List</h4>
                <div class="table-responsive">
                    <table class="table table-bordered table-hover table-dark text-center mt-2">
                        <thead class="table-light">
                            <tr>
                                <thead class="table-light">
                                    <th scope="col">ID</th>
                                    <th scope="col">Subject</th>
                                    <th scope="col">Subject index</th>
                                    <th scope="col">Subject Order</th>
                                    <th scope="col">Subject type</th>
                                </thead>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($subject as $subject)
                            <tr>
                                <td>{{ $subject->id }}</td>
                                <td>{{ $subject->subject_name }}</td>
                                <td>{{ $subject->subject_index }}</td>
                                <td>{{ $subject->subject_order }}</td>
                                <td>{{ $subject->subject_type }}</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                <h4 class="card-title text-center text-white mb-3">Show Grade List</h4>
                <!-- Grade Info Table -->
                <div class="table-responsive mt-2">
                    <table class="table table-bordered table-hover text-center ">
                        <thead class="table-light">
                            <tr>
                                <th colspan="2">Grade Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Grade ID</th>
                                <td>{{ $grade->id }}</td>
                            </tr>
                            <tr>
                                <th>Grade Name</th>
                                <td>{{ $grade->grade_name }}</td>
                            </tr>
                            <tr>
                                <th>Grade Color</th>
                                <td @style([ 'color: ' . $grade->grade_color ])>
                                    {{ $grade->grade_color }}
                                </td>
                            </tr>
                            <tr>
                                <th>Grade Order</th>
                                <td>{{ $grade->grade_order }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Back Button -->
                <div class="text-center">
                    <a href="{{ route('grades.index') }}" class="btn btn-success mt-3 text-white">Back</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection