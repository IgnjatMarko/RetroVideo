import React from "react";
import "./DescriptionBox.scss";

function DescriptionBox() {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Curabitur molestie eu enim ac vehicula. Sed imperdiet purus in
          pellentesque bibendum. Pellentesque tempor, sapien non luctus
          ullamcorper, justo sapien mattis diam, vel pellentesque est diam
          elementum felis. Ut mi est, maximus id pharetra non, volutpat sit amet
          magna. Aliquam erat volutpat. Fusce hendrerit ut est id ullamcorper.
          Vivamus facilisis elit metus, venenatis placerat metus accumsan vel.
          Proin pulvinar iaculis justo a feugiat. Donec et quam lectus. Fusce
          sagittis vestibulum quam in interdum. Etiam ut est et neque vehicula
          euismod eget quis diam. Vestibulum dignissim, nunc ut egestas
          tincidunt, nunc purus bibendum lectus, eu laoreet massa nisl sit amet
          magna. Aliquam erat volutpat. Fusce convallis mollis est ut
          pellentesque. Nullam tristique ligula quis mauris placerat imperdiet.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
