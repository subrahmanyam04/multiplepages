import React from 'react';

const Servicespage = () => {
    const List = [
        {
            description: "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
            description: "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
            description: "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
        {
            description: "Ullamco laboris nisi ut aliquip ex ea commodo consequat",
        },
    ];

    const data =[
        {
            img : "./assets/images/31-removebg.png",
            des : "The elegant Zenbook is compact, ultrathin and light, featuring the best laptop technology.",
            img1 : "./assets/images/32-removebg-preview.png",
        },
        {
            img : "./assets/images/33-removebg.png",
            des : "The elegant Zenbook is compact, ultrathin and light, featuring the best laptop technology.",
            img1 : "./assets/images/34-removebg-preview.png",
        },
        {
            img : "./assets/images/35-removebg-preview.png",
            des : "The elegant Zenbook is compact, ultrathin and light, featuring the best laptop technology.",
            img1 : "./assets/images/36-removebg-preview.png",
        },
        {
            img : "./assets/images/33-removebg.png",
            des : "The elegant Zenbook is compact, ultrathin and light, featuring the best laptop technology.",
            img1 : "./assets/images/34-removebg-preview.png",
        },

    ]

    return (


        <div>
            <div className='container'>
            <h1 className='fs-3  text-danger text-center mt-3'>SERVICES</h1>
            <hr/>
                <div className='row text-start mt-md-3'>
                    <div className='col-md-12'>
                        <p>As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.As you can see the paragraphs gracefully wrap around the floated image. Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.Now imagine how this would look with some actual content in here, rather than just this boring placeholder text that goes on and on, but actually conveys no tangible information at. It simply takes up space and should not really be read.</p>
                    </div>
                </div>
                <div className='row text-start mt-md-3'>
                    <div className='col-md-8'>
                        <ul className='tick-mark-list'>
                            {List.map((lists) => (
                                <li>{lists.description}</li>
                            ))}

                        </ul>
                    </div>
                </div>
            </div>

            <div className='container mt-md-5 mt-sm-2'>
                <h2 className=' text-warning text-center'>Our Services For You</h2>
{data.map((datas)=>( 
            <div className='row mt-md-5'>
            <div className='col-md-2 col-lg-1'>
           <img src={datas.img} alt='' height="80px" width="80px" />
            </div>
            <div className='col-md-4 col-lg-5 mt-md-3'>
              <p className='text-start'>{datas.des}</p> 
            </div>
            <div className='col-md-2 col-lg-1'>
            <img src={datas.img1} alt='' height="80px" width="80px" />
            </div>
            <div className='col-md-4 col-lg-5 mt-md-3'>
            <p className='text-start'>{datas.des}</p> 

            </div>
</div>
))}
</div>
<div class="container text-center mt-4">
    <div class="row align-items-start">
      <div class="col">
        <h3>Zenbook</h3>
        <p className='text-start'>The elegant Zenbook is compact, ultrathin and light, featuring the best laptop technology, NanoEdge displays, precision craftsmanship,
             uncompromising performance, 
            and innovation. It's designed to bring out the very best in you</p>
      </div>
    </div>
 </div>

            </div>



            );
}

            export default Servicespage;