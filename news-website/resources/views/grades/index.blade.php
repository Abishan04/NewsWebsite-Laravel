@extends('layouts.master')

@section('title', 'Index')

@section('content')
<section class="wrap__section ">
    <div class="container ">
        <div class="row ">
            <div class="col-md-12 ">
                <div class="card mx-auto shadow bg-primary ">
                    <div class="card-body">
                        <h4 class="card-title text-center text-white mb-4">Index Grades List</h4>

                        <div class="table-responsive text-nowrap">
                            <table class="table table-bordered bg-dark text-white  text-center mb-0">
                                <thead class="">
                                    <tr>
                                        <th>id</th>
                                        <th>Grade Name</th>
                                        <th>Grade Color</th>
                                        <th>Grade Order</th>
                                        <th>Created At</th>
                                        <th>Updated At</th>
                                        <th colspan="3" scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($grades as $grade)  
                                        <tr>
                                            <td>{{ $grade->id }}</td>
                                            <td>{{ $grade->grade_name }}</td>
                                            <td>{{ $grade->grade_color }}</td>
                                            <td>{{ $grade->grade_order }}</td>
                                            <td>{{ $grade->created_at }}</td>
                                            <td>{{ $grade->updated_at }}</td>
                                              <td><a href="/grades/{{ $grade->id }}" class="btn btn-success ">Show</a></td>
                                            <td><a href="/grades/{{ $grade->id }}/edit" class="btn btn-warning">Edit</a></td>
                                            <form action="/grades/{{ $grade->id }}" method="post">
                                                @csrf
                                                @method('delete')
                                            <td><a href="/grades/{{ $grade->id }}/destroy" class="btn btn-danger">Delete</a></td>
                                            </form>
                                        </tr> 
                                    @endforeach
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                  <div style="display: flex; justify-content: center;">
                 <a href="/grades/create" class="btn btn-info btn-block mt-3 mx-auto text-center text-white">Create</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection