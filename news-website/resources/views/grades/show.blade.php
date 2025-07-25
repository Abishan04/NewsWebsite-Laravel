@extends('layouts.master')

@section('content')
<section class="wrap__section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card mx-auto shadow bg-primary">
                    <div class="card-body">
                        <h4 class="card-title text-center text-white mb-4">Show Grades List</h4>

                        <div class="table-responsive text-nowrap">
                            <table class="table table-bordered table-striped table-hover text-center mb-0 ">
                                <thead class="table-primary">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Grade Name</th>
                                        <th scope="col">Grade Color</th>
                                        <th scope="col">Grade Order</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{{ $grade->id }}</td>
                                        <td>{{ $grade->grade_name }}</td>
                                        <td>{{ $grade->grade_color }}</td>
                                        <td>{{ $grade->grade_order }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                <div style="display: flex; justify-content: center;">
                 <a href="/grades" class="btn btn-success mt-3 mx-auto text-center text-white">Back</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection