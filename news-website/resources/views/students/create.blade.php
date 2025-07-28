@extends('layouts.master')

@section('content')
<section class="wrap__section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card mx-auto" style="max-width: 380px;">
                    <div class="card-body bg-light rounded-3" style="box-shadow: 10px 10px 5px #888;">
                        <h4 class="card-title mb-4">Create Student</h4>
                        <form action="/students" method="post">
                            @csrf
                            
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="admission_no" id="admission_no" placeholder="Enter student admission no">
                                <label for="admission_no">Admission No</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="first_name" id="first_name" placeholder="Enter student first name">
                                <label for="first_name">First Name</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Enter student last name">
                                <label for="last_name">Last Name</label>
                            </div>

                            <div class="mb-3">
                                <label class="d-block mb-2">Gender</label>
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" name="gender" id="male" value="male">
                                    <label class="form-check-label" for="male">Male</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" class="form-check-input" name="gender" id="female" value="female">
                                    <label class="form-check-label" for="female">Female</label>
                                </div>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="telephone_no" id="telephone_no" placeholder="Enter student telephone no">
                                <label for="telephone_no">Telephone No</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" name="nic_no" id="nic_no" placeholder="Enter student NIC No">
                                <label for="nic_no">NIC No</label>
                            </div>

                            <div class="form-floating mb-3">
                                <input type="date" class="form-control" name="date_of_birth" id="date_of_birth" placeholder="Enter date of birth">
                                <label for="date_of_birth">Date of Birth</label>
                            </div>

                            <div class="form-floating mb-4">
                                <textarea class="form-control" placeholder="Enter student address" id="address" name="address" style="height: 100px"></textarea>
                                <label for="address">Address</label>
                            </div>

                            <div class="mb-3 d-grid">
                                <input type="submit" class="btn btn-outline-primary btn-block" value="Create">
                            </div>

                            <div class="d-grid">
                                <a href="/students" class="btn btn-outline-success btn-block">Back</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection