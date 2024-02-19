import { React } from "react";


function Profile()
{
    return (
        <> 
       <div className = "container-fluid">
          <form method="">
            
             <div className="row">
                <h1>Your Profile</h1>
                  <div  id="border" className="col-md-4">
                  <img src="https://codingyaar.com/wp-content/uploads/bootstrap-4-card-image-left-demo-image.jpg" className="img-fluid" alt="image" />
                        <div className="profile-head">
                            <h2>Neelesh Bhargava</h2>
                            <h4>web devveloper</h4>
                        </div>
                 </div>
                 
                 
                 <div className="col-md-2">
                 <div className="button ">
                 <button type="button" class="btn btn-outline "> <h3>Edit</h3></button>
                 </div>
                 </div>
                 
            </div>
            <div className="row lower">
               
               <div className="col-md-8 pl-5 about-info">
                  <div className="tab-content profile-tab" id="myTabContent">
                    <div className="row">
                       <div className="col-md-3">
                         <label htmlFor=""><h4>Branch</h4></label>
                       </div>
                       <div className="col-md-1"><b>:</b></div>
                       <div className="col-md-4">
                         <p><h4>IT</h4></p>
                       </div>
                    </div>
                    <div className="row">
                       <div className="col-md-3">
                         <label htmlFor=""><h4>Sem</h4></label>
                       </div>
                       <div className="col-md-1"><b>:</b></div>
                       <div className="col-md-4">
                         <p><h4>6th</h4></p>
                       </div>
                    </div>
                    <div className="row">
                       <div className="col-md-3">
                         <label htmlFor=""><h4>Email </h4></label>
                       </div>
                       <div className="col-md-1"><b>:</b></div>
                       <div className="col-md-4">
                         <p><h4>bhargava@23</h4></p>
                       </div>
                    </div>
                    <div className="row">
                       <div className="col-md-3">
                         <label htmlFor=""><h4>Skills</h4></label>
                       </div>
                       <div className="col-md-1"><b>:</b></div>
                       <div className="col-md-4">
                         <p><h4>C,C++,Java,Python</h4></p>
                       </div>
                    </div>

                  </div>
                 
               </div>
            </div>
         </form>
     </div>
    
    </>
    )
};

export default Profile;