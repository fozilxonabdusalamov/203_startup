import { Search } from "lucide-react";
import React from "react";

function JobLinkLogo() {
  return (
    <div className="joblink-logo">
      <div className="joblink_con">
        ish <span className="font_bold">link</span>
      </div>
      <Search className="search_icon" />
    </div>
  );
}

export default JobLinkLogo;

