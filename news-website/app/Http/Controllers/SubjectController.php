<?php

namespace App\Http\Controllers;
use App\Models\Subject;
use Illuminate\Http\Request;

class SubjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subjects = Subject::all();
        return view('subjects.index', compact('subjects'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('subjects.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $subject=new Subject();
        $subject->subject_name=$request->subject_name;
        $subject->subject_index=$request->subject_index;
        $subject->subject_order=$request->subject_order;
        $subject->subject_type=$request->subject_type;
        $subject->save();
        return redirect()->route('subjects.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $students=Subject::find($id)->students;
        $subjects =Subject::find($id)->grade;
        $subject=Subject::find($id);
        return view('subjects.show', compact('subject'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $subject=Subject::find($id);
        return view('subjects.edit', compact('subject'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $subject=Subject::find($id);
        $subject->subject_name=$request->subject_name;
        $subject->subject_index=$request->subject_index;
        $subject->subject_order=$request->subject_order;
        $subject->subject_type=$request->subject_type;
        $subject->save();
        return redirect()->route('subjects.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $subject=Subject::find($id);
        $subject->delete();
        return redirect()->route('subjects.index');
    }
}
