<div class="row mt-3 mb-3">
    <div class="col-sm-12">
        <div class="collapse" id="add_person_section">
            <div class="bg-dark p-4">
                <h5 class="text-white h4">Add a new person</h5>
                <span class="text-muted">Enter the necessary data to select if you enter an admin or a student</span>
                <hr><br>
                <form class="row g-3 needs-validation" novalidate method="POST" action="./add_person_handler.php">
                    <div class="row mb-3">
                        <div class="col-sm-4">
                            <label for="first_name" class="form-label text-white">First name</label>
                            <input type="text" class="form-control" id="first_name" name="first_name" value="" required placeholder="First Name">
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="last_name" class="form-label text-white">Last name</label>
                            <input type="text" class="form-control" id="last_name" name="last_name" value="" required placeholder="Last Name">
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <label for="address" class="form-label text-white">Address</label>
                            <input type="text" class="form-control" id="address" name="address" value="" required placeholder="Address">
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-4">
                            <label for="phone_number" class="form-label text-white">Phone number</label>
                            <input type="text" class="form-control" id="phone_number" name="phone_number" value="" required placeholder="Phone number">
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <label for="mail" class="form-label text-white">Mail</label>
                            <input type="mail" class="form-control" id="mail" name="mail" value="" placeholder="E-mail">
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label for="" class="form-label text-white">Type</label>
                            <br>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="admin_or_student" id="new_admin" value="admin" required>
                                <label class="form-check-label text-white" for="new_admin">New Admin</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="admin_or_student" id="new_student" value="student" required>
                                <label class="form-check-label text-white" for="new_student">New Student</label>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3 student_specification_before" id="student_specification">
                        <div class="col-md-3"></div>
                        <div class="col-md-6">
                            <label for="specification" class="form-label text-white">Specification</label>
                            <select class="form-select" id="specification" name="specification">
                                <option selected disabled value="" class="select_option">Choose specification</option>
                                <option value="1" class="select_option">Front-End Developper</option>
                                <option value="2" class="select_option">Back-End Developper</option>
                                <option value="3" class="select_option">Full Stack Developper</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid specification.
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="row mb-3">
                        <div class="col-md-3"></div>
                        <div class="col-sm-3">
                            <label for="validationCustom01" class="form-label text-white">User Name</label>
                            <input type="mail" class="form-control" id="user_name" name="user_name" value="" placeholder="User Name" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <label for="validationCustom01" class="form-label text-white">Password</label>
                            <input type="password" class="form-control" id="pass" name="pass" value="" placeholder="Password" required>
                            <div class="valid-feedback">
                                Looks good!
                            </div>
                        </div>
                        <div class="col-md-3"></div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-12">
                            <button class="btn btn-warning" type="submit" name="add_person">Submit form</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#add_person_section" aria-controls="add_person_section" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span> Add Person
                </button>
            </div>
        </nav>
    </div>
</div>