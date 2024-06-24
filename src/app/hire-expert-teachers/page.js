"use client";
import React, { useEffect, useState } from "react";
import "./hire-expert-teachers.css";
import data from "../../json/hire-expert-teachers.json";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    // Simulating fetching data from JSON file
    const fetchData = async () => {
      try {
        setTeachers(data.teachers);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    // Call fetchData function
    fetchData();
  }, []);

  return (
    <div className="hire-expert-teacher-bg">
      <section className="hire-expert-teacher-title">
        <div className="container">
          <h1>Hire Expert Teachers</h1>
        </div>
      </section>
      <section className="hire-expert-teacher-body">
        <div className="container">
          <div className="row">
            {teachers.map((item) => {
              const modalId = `modal-${item.id}`;
              return (
                <div
                  className="col-xs-12 col-sm-12 col-md-12 col-lg-6"
                  key={item.id}
                >
                  <button
                    type="button"
                    className="title-button"
                    data-bs-toggle="modal"
                    data-bs-target={`#${modalId}`}
                  >
                    <h3>{item.name.toUpperCase()}</h3>
                  </button>
                  <div
                    className="modal fade"
                    id={modalId}
                    tabIndex="-1"
                    aria-labelledby={`${modalId}-label`}
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header modal-header-bg">
                          <div className="modal-header-title">
                            <h4 className="modal-title" id={`${modalId}-label`}>
                              {item.name}
                            </h4>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div>
                            <p>{item.description}</p>
                          </div>
                        </div>
                        <div className="modal-body">
                          <ul type="none" className="teacher-list">
                            <li>
                              <p>
                                <b>DATE OF BIRTH</b>
                              </p>
                              <p>: </p>
                              <p>{item.dob}</p>
                            </li>
                            {item.hobbies && (
                              <li>
                                <p>
                                  <b>HOBBIES AND INTEREST</b>
                                </p>
                                <p>: </p>
                                <p>{item.hobbies}</p>
                              </li>
                            )}
                            {item.education && (
                              <li>
                                <p>
                                  <b>EDUCATIONAL QUALIFICATION</b>
                                </p>
                                <p>: </p>
                                <p>{item.education}</p>
                              </li>
                            )}
                            {item.experience && (
                              <li>
                                <p>
                                  <b>EXPERIENCE</b>
                                </p>
                                <p>: </p>
                                <p>{item.experience}</p>
                              </li>
                            )}
                            {item.yearsOfExperience && (
                              <li>
                                <p>
                                  <b>YEARS OF EXPERIENCE</b>
                                </p>
                                <p>: </p>
                                <p>{item.yearsOfExperience}</p>
                              </li>
                            )}
                            {item.school && (
                              <li>
                                <p>
                                  <b>SCHOOL</b>
                                </p>
                                <p>: </p>
                                <p>{item.school}</p>
                              </li>
                            )}
                            {item.strengths && (
                              <li>
                                <p>
                                  <b>STRENGTHS</b>
                                </p>
                                <p>: </p>
                                <p>{item.strengths}</p>
                              </li>
                            )}
                            {item.languagesKnown && (
                              <li>
                                <p>
                                  <b>LANGUAGE PROFICIENCY</b>
                                </p>
                                <p>: </p>
                                <p>{item.languagesKnown}</p>
                              </li>
                            )}
                            {item.batchNo && (
                              <li>
                                <p>
                                  <b>BATCH NO.</b>
                                </p>
                                <p>: </p>
                                <p>{item.batchNo}</p>
                              </li>
                            )}
                            {item.position && (
                              <li>
                                <p>
                                  <b>POSITION</b>
                                </p>
                                <p>: </p>
                                <p>{item.position}</p>
                              </li>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
