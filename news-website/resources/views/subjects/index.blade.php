@extends('layouts.master')

@section('title', 'Index')

@section('content')
<section class="wrap__section ">
    <div class="container ">
        <div class="row ">
            <div class="col-md-12 ">
                <div class="card mx-auto shadow bg-primary ">
                    <div class="card-body">
                        <h4 class="card-title text-center text-white mb-4">Index Subjects List</h4>

                        <div class="table-responsive text-nowrap">
                            <table class="table table-bordered bg-dark text-white  text-center mb-0">
                                <thead class="">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Subject Name</th>
                                        <th scope="col">Subject Index</th>
                                        <th scope="col">Subject Order</th>
                                        <th scope="col">Created At</th>
                                        <th scope="col">Updated At</th>
                                        <th colspan="3" scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($subjects as $subject)
                                    <tr>
                                        <td>{{ $subject->id }}</td>
                                        <td>{{ $subject->subject_name }}</td>
                                        <td>{{ $subject->subject_index }}</td>
                                        <td>{{ $subject->subject_order }}</td>
                                        <td>{{ $subject->created_at }}</td>
                                        <td>{{ $subject->updated_at }}</td>
                                        <td><a href="/subjects/{{ $subject->id }}" class="btn btn-success ">Show</a></td>
                                        <td><a href="/subjects/{{ $subject->id }}/edit" class="btn btn-primary">Edit</a></td>
                                        <form action="/subjects/{{ $subject->id }}" method="post">
                                            @csrf
                                            @method('delete')
                                        <td><a href="/subjects/{{ $subject->id }}/destroy" class="btn btn-danger">Delete</a></td>
                                        </form>
                                    </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
                 <div style="display: flex; justify-content: center;">
                 <a href="/subjects/create" class="btn btn-block btn-info mt-3 mx-auto text-center text-white">Create</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection