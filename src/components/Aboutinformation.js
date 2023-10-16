import React from 'react';
const Aboutinformation = () => {
  return (

    <div>
      <div class="container-fluid">
      <h1 className='fs-3  text-danger text-center mt-3'>ABOUT US</h1>
            <hr/>
        <div class="row mt-md-5 mb-md-4">
          <div class="col-md-4 ">
            <div class="">
              <img src="./assets/images/8.jpg" class="rounded-4 border border-4 border-danger " width="100%" height="300px" alt="" />
            </div>
          </div>
          <div class="col-md-8 ">
            <div class="mt-3">
              <p className='text-start p-2'>
                A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
              </p>

              <p className='text-start p-2'>
                As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
              </p>
            </div>
          </div>
        </div>

        <div className='row mt-md-5 mb-md-4'>
          <div className='col-md-3'>
            <img src='./assets/images/11.jpeg' class="rounded-4 border border-4 border-success mb-3 mt-3" alt='' width="100%" height="200px" />
          </div>
          <div className='col-md-6'>
            <p className='text-start p-2 mt-md-4 mt-lg-5'>
              As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.

            </p>
          </div>
          <div className='col-md-3'>
            <img src='./assets/images/12.jpeg' alt='' class="rounded-4 border border-4 border-success mb-3 mt-3" width="100%" height="200px" />
          </div>
        </div>




        <div class="row mt-md-5">

          <div class="col-md-8  mb-3   ">
            <div class="p-2">
              <p className='text-start p-2'>
                A paragraph of placeholder text. We're using it here to show the use of the clearfix class. We're adding quite a few meaningless phrases here to demonstrate how the columns interact here with the floated image.
              </p>

              <p className='text-start p-2'>
                As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.
              </p>


            </div>
          </div>

          <div class="col-md-4  mb-3  ">
            <div class="">
              <img src="./assets/images/8.jpg" class="rounded-4 border border-4 border-danger" width="100%" height="300px" alt="" />
            </div>
          </div>

        </div>
      </div>



    </div>

  );
}

export default Aboutinformation;