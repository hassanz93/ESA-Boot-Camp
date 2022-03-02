<div class="row mt-3">
    <div class="col-sm-8">
        <div class="row">
            <div class="col-sm-12">
                <div class="collapse" id="add_subject_section">
                    <div class="bg-dark p-4">
                        <h5 class="text-white h4">Add a new subject</h5>
                        <span class="text-muted">Enter the necessary data</span>
                        <hr><br>
                        <form class="row g-3 needs-validation" novalidate method="POST" action="">
                            <!-- ./add_subject_handler.php -->
                            <div class="row">
                                <div class="col-sm-6">
                                    <label for="validationCustom01" class="form-label text-white">Subject Name</label>
                                    <input type="text" class="form-control" id="sub_name" name="sub_name" value="" required placeholder="Subject Name">
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="validationCustom04" class="form-label text-white">Semester</label>
                                    <select class="form-select" id="semester" name="semester" required>
                                        <option selected disabled value="" class="select_option">Choose semester</option>
                                        <option value="1" class="select_option">Semester 1</option>
                                        <option value="2" class="select_option">Semester 2</option>
                                        <option value="3" class="select_option">Semester 3</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Please select a valid semester.
                                    </div>
                                </div>
                            </div>
                            <div class="row mt-4">
                                <div class="col-12">
                                    <button class="btn btn-warning" type="button" name="add_subject" id="add_subject">Add Subject</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#add_subject_section" aria-controls="add_subject_section" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span> Add Subject
                        </button>
                    </div>
                </nav>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-sm-12">
                <?php include('./show_subjects_form.php'); ?>
            </div>
        </div>
    </div>
    <div class="col-sm-4">
        <img class="add_subject_img" src="../img/add_subject.jpeg" class="rounded" alt="Cinque Terre">
    </div>
</div>