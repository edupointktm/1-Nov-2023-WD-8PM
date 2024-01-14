import React from 'react'
import Data from '../component/Data'
function Student_card() {
    return (
        <>
            <div className="container-fluid bg-white py-3 mb-2 ">
                <h2 className='m-4'>Studnet Card</h2>


            </div>

            <div className="container-fluid">
                <div className="row">
                    {Data.map((std) =>
                        <div className="col-4">
                            <div className="card">
                                <div className="card-header">BROADWAY INFOSYS</div>
                                <div className="card-body">
                                    <div className="image">
                                        <div className="img-title">ID No.: {std.id}</div><img src={std.image} alt="" /></div>
                                    <div className="card-content">
                                        <div className="title">{std.names}
                                            <div className="sub-title">{std.Faculty}</div>
                                        </div>
                                        <div className="card-details">
                                            <h6>Moible No.: {std.Mobile_no}</h6>
                                            <h6>Address: {std.Address} </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footers">IDENTITY CARD</div>
                            </div>
                        </div>
                    )}


                </div>




            </div>

        </>
    )
}

export default Student_card