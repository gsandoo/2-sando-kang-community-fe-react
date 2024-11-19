import React, { useState } from "react";

const ProfileImageUploader = ({ onImageChange }) => {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      onImageChange(file); // 부모 컴포넌트로 파일 전달
    }
  };

  return (
    <div className="profile-section">
      <div className="profile-image" id="profileImageContainer">
        {imagePreview ? (
          <img
            id="profileImage"
            src={imagePreview}
            alt="프로필 이미지"
            style={{ display: "block", width: "100px", height: "100px", objectFit: "cover" }}
          />
        ) : (
          <button className="upload-button" id="uploadButton">
            +
          </button>
        )}
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
      </div>
      <p className="profile-label">프로필 사진 변경</p>
    </div>
  );
};

export default ProfileImageUploader;
