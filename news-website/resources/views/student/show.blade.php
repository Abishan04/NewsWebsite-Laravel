@extends('layouts.master')

@section('content')
<section class="wrap__section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="card mx-auto shadow bg-primary">
                    <div class="card-body">
                        <h4 class="card-title text-center text-white mb-4">Show Student List</h4>

                        <div class="table-responsive">
                            <table class="table table-bordered table-striped table-hover text-center mb-0 ">
                                <thead class="table-primary">
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Firstname</th>
                                        <th scope="col">Lastname</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Jeyarajah</td>
                                        <td>Abishan</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Mathi</td>
                                        <td>Varman</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Jana</td>
                                        <td>Rasa</td>
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