@extends('layouts.master')

@section('content')
    <section class="wrap__section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="card mx-auto" style="max-width: 380px;">
                        <div class="card-body bg-light rounded-3  " style="box-shadow: 10px 10px 5px #888;" >
                            <h4 class="card-title mb-4">Edit Student</h4>
                            <form action="/students/{{ $student->id }}" method="post">
                            @csrf
                            @method('put')
                                         <div class="form-group form-floating">
                                <input class="form-control" name="admission_no" id="admission_no"
                                    placeholder="Enter student admission no" type="text" value="{{ $student->admission_no }}">
                                <label for="admission_no">Admission No</label>
                            </div>
                            <div class="form-group form-floating">
                                <input class="form-control" name="first_name" id="first_name"
                                    placeholder="Enter student first name" type="text" value="{{ $student->first_name }}">
                                <label for="first_name">Firstname</label>
                            </div>
                            <div class="form-group form-floating">
                                <input class="form-control" name="last_name" id="last_name"
                                    placeholder="Enter student last name" type="text" value="{{ $student->last_name }}">
                                <label for="last_name">Lastname</label>
                            </div>
                            <div class="form-group">
                                <label class="d-block mb-2">Gender</label>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="male" value="male"  {{ $student->gender == 'Male' ? 'checked' : '' }}>
                                    <label class="form-check-label" for="male">Male</label>
                                </div>

                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="gender" id="female"
                                        value="female" {{ $student->gender == 'Female' ? 'checked' : '' }}>
                                    <label class="form-check-label" for="female">Female</label>
                                </div>
                            </div>
                            
                            <div class="form-group form-floating">
                                <input class="form-control" name="telephone_no" id="telephone_no"
                                    placeholder="Enter student telephone no" type="text" value="{{ $student->telephone_no }}">
                                <label for="telephone_no">Telephone No</label>
                            </div>
                            <div class="form-group form-floating">
                                <input class="form-control" name="nic_no" id=" nic_no"
                                    placeholder="Enter student Nic No" type="text" value="{{ $student->nic_no }}">
                                <label for="telephone_no">Nic No</label>
                            </div>
                            <div class="form-group form-floating">
                                <input type="date" class="form-control" name="date_of_birth" id="date_of_birth"
                                    placeholder="Enter date of birth"     value="{{ $student->date_of_birth}}">
                                <label for="dob">Date of Birth</label>
                            </div>
                               <div class="form-group form-floating">
                                <input class="form-control" name="address" id=" address"
                                    placeholder="Enter student address" type="text" value="{{ $student->address }}">
                                <label for="address">Address</label>
                            </div>

                             
                                <div class="form-group">
                                    <input type="submit" class="btn btn-outline-primary btn-block" value="Update"> 
                                </div>
                                  <div class="form-group">
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