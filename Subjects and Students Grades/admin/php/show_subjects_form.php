<div class="row mt-3">
    <div class="col-sm-12">
        <div class="collapse" id="show_subjects_section">
            <div class="bg-dark p-4">
                <h5 class="text-white h4">Subjects Details</h5>
                <span class="text-muted">In this section you can see all the existing subjects, and you can add, update and delete subjects</span>
                <hr><br>
                <!-- Show subjects details -->
                <div class="row mt-3">
                    <div class="col-sm-12">
                        <div class="table-responsive">
                            <table class="table table-bordered align-middle text-center bg-light">
                                <thead class="table bg-success">
                                    <tr>
                                        <th>Subject Name</th>
                                        <th>Semester</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody id="show_subject_details">
                                </tbody>
                                <tfoot class="table">
                                    <form class="row g-3 needs-validation" novalidate method="POST" action="">
                                        <tr class="table bg-danger">
                                            <th id="name_new_subject">
                                                <input type="text" class="form-control" id="sub_name" name="sub_name" value="" required placeholder="Subject Name">
                                                <div class="valid-feedback">
                                                    Looks good!
                                                </div>
                                            </th>
                                            <th id="semester_new_subject">
                                                <select class="form-select" id="semester" name="semester" required>
                                                    <option selected disabled value="" class="select_option">Choose semester</option>
                                                    <option value="1" class="select_option">Semester 1</option>
                                                    <option value="2" class="select_option">Semester 2</option>
                                                    <option value="3" class="select_option">Semester 3</option>
                                                </select>
                                                <div class="invalid-feedback">
                                                    Please select a valid semester.
                                                </div>
                                            </th>
                                            <th>
                                                <button class="btn btn-warning" type="button" name="add_subject" id="add_subject">Add Subject</button>
                                            </th>
                                        </tr>
                                    </form>
                                    <tr class="table bg-primary">
                                        <th>Total</th>
                                        <th colspan=2 id="show_sub_count"></th>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- End subjects details -->
            </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#show_subjects_section" aria-controls="show_subjects_section" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span> Show Subjects
                </button>
            </div>
        </nav>
    </div>
</div>