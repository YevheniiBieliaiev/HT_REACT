import React from "react";
import AUTHOR_INFO from "../pseudo_data_base/authorinfo_db";
import { useParams } from "react-router";
import gID from "../gid_general";


function AuthorInfo() {
  const params = useParams();

  return (
    <div className="author__info" >
      {
        AUTHOR_INFO.map(item => {
          return (
            (item.author === params.author) ?
              (<div key={gID} className="details__wrapper">
                <span className="author">{item.author}</span>
                <p className="author__details">{item.details_block_1}</p>
                <span className="current__header">Current line-up</span>
                <p className="current">{item.current}</p>
              </div>)
              :
              null
          );
        })
      }
    </div>
  );
}

export default AuthorInfo;