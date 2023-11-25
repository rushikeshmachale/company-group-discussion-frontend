import React from 'react'

const Admin = () => {
    return (

        <div><h1 class="text-center">Admin</h1>
            <div class="container mt-5">

                <div class="row">

                    <div class="col-md-6">
                        <div class="p-3 mb-3">
                            <h2>Functional Groups</h2>
                            <div class="list-group" id="functionalGroups">
                                <div class="list-group-item d-flex justify-content-between align-items-center">
                                    Sample Functional Group 1
                                    <div>
                                        <button class="btn btn-sm btn-primary mr-2" onclick="onupdate()">Update</button>
                                        <button class="btn btn-sm btn-danger" onclick="ondelete()">Delete</button>
                                    </div>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center">
                                    Sample Functional Group 2
                                    <div>
                                        <button class="btn btn-sm btn-primary mr-2" onclick="onupdate()">Update</button>
                                        <button class="btn btn-sm btn-danger" onclick="ondelete()">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary mt-3">Add Functional Group</button>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="p-3 mb-3 ">
                            <h2>Technical Groups</h2>
                            <div class="list-group" id="technicalGroups">
                                <div class="list-group-item d-flex justify-content-between align-items-center">
                                    Sample Technical Group 1
                                    <div>
                                        <button class="btn btn-sm btn-primary mr-2" onclick="onupdate()">Update</button>
                                        <button class="btn btn-sm btn-danger" onclick="ondelete()">Delete</button>
                                    </div>
                                </div>
                                <div class="list-group-item d-flex justify-content-between align-items-center">
                                    Sample Technical Group 2
                                    <div>
                                        <button class="btn btn-sm btn-primary mr-2" onclick="onupdate()">Update</button>
                                        <button class="btn btn-sm btn-danger" onclick="ondelete()">Delete</button>
                                    </div>
                                </div>
                            </div>
                            <button class="btn btn-primary mt-3">Add Technical Group</button>
                        </div>
                    </div>
                    <button class="btn btn-primary mt-3">Chat</button>
                </div>
            </div>
          
            </div>
            


    )
}

export default Admin