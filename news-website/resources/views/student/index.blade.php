@extends('layouts.master')

@section('title', 'Index')

@section('content')
<section class="wrap__section ">
    <div class="container ">
        <div class="row ">
            <div class="col-md-12 ">
                <div class="card mx-auto shadow bg-primary ">
                    <div class="card-body">
                        <h4 class="card-title text-center text-white mb-4">Index Student List</h4>

                        <div class="table-responsive">
                            <table class="table table-bordered bg-dark text-white  text-center mb-0">
                                <thead class="">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Firstname</th>
                                        <th scope="col">Lastname</th>
                                        <th colspan="3" scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Jeyarajah</td>
                                        <td>Abishan</td>
                                        <td><a href="/student/1/edit" class="btn btn-outline-primary btn-sm">Edit</a></td>
                                        <td>
                                            <form action="/student/1" method="post">
                                                @csrf
                                                @method('delete')
                                                <button type="submit" class="btn btn-outline-danger btn-sm">Delete</button>
                                            </form>
                                        </td>
                                        <td><a href="/student/1" class="btn btn-outline-success btn-sm">Show</a></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mathi</td>
                                        <td>Varman</td>
                                        <td><a href="/student/2/edit" class="btn btn-outline-primary btn-sm">Edit</a></td>
                                        <td>
                                            <form action="/student/2" method="post">
                                                @csrf
                                                @method('delete')
                                                <button type="submit" class="btn btn-outline-danger btn-sm">Delete</button>
                                            </form>
                                        </td>
                                          <td><a href="/student/1" class="btn btn-outline-success btn-sm">Show</a></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Jana</td>
                                        <td>Rasa</td>
                                        <td><a href="/student/3/edit" class="btn btn-outline-primary btn-sm">Edit</a></td>
                                        <td>
                                            <form action="/student/3" method="post">
                                                @csrf
                                                @method('delete')
                                                <button type="submit" class="btn btn-outline-danger btn-sm">Delete</button>
                                            </form>
                                        </td>
                                          <td><a href="/student/1" class="btn btn-outline-success btn-sm">Show</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection