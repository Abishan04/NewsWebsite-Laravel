<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Models\Grade;
use App\Models\Subject;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students =Student::all();
        return view('students.index', compact('students'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $grades=Grade::all();
        $subjects=Subject::all();
        return view('students.create', compact('grades', 'subjects'));
    }

    /**
     * Store a newly created resource in storage.
     */
   public function store(Request $request)
{
    $student = new Student();
    $student->grade_id = $request->grade_id;
    $student->admission_no = $request->admission_no;
    $student->first_name = $request->first_name;
    $student->last_name = $request->last_name;
    $student->gender = $request->gender;
    $student->telephone_no = $request->telephone_no;
    $student->nic_no = $request->nic_no;
    $student->date_of_birth = $request->date_of_birth;
    $student->address = $request->address;
    $student->save();
    $student->subjects()->attach($request->subject_id);
    return redirect()->route('students.index');
}

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
     
        $students=Student::find($id);
        $subjects =Student::find($id)->subjects;
        return view('students.show', compact('student'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $student=Student::find($id);
        return view('students.edit', compact('student'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $student=Student::find($id);
        $student->admission_no=$request->admission_no;
        $student->first_name=$request->first_name;
        $student->last_name=$request->last_name;
        $student->gender=$request->gender;
        $student->telephone_no=$request->telephone_no;
        $student->nic_no=$request->nic_no;
        $student->date_of_birth=$request->date_of_birth;
        $student->address=$request->address;
        $student->save();
        return redirect()->route('students.index');
        
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $student=Student::find($id);
        $student->delete();
        return redirect()->route('students.index');
    }
 
}
