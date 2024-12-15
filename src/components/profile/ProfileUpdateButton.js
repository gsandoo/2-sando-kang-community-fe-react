import React, { useState } from 'react';
import { handleLocation } from '../../utils/handleLocation';
import { getLocalStorage, saveLocalStorage } from '../../utils/session';

const ProfileUpdateButton = ({ nickname, setError, error, file }) => {
  const [toastVisible, setToastVisible] = useState(false);

  const handleUpdate = async () => {
    console.log('닉네임:', nickname);
    console.log('파일:', file);

    if (!file) {
      console.error('파일이 전달되지 않았습니다.');
      setError('파일을 선택해 주세요.');
      return;
    }

    const formData = new FormData();
    const userId = getLocalStorage('userId');
    try {
      formData.append('user_id', userId);
      formData.append('nickname', nickname);
      formData.append('profile', file);

      const response = await fetch('/api/auth/nickname', {
        method: 'PATCH',
        body: formData,
      });

      if (response.ok) {
        alert('닉네임 수정 성공');
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 2000);
        saveLocalStorage('nickname', nickname);
        saveLocalStorage('profile',file);
        handleLocation('/Posts');
      } else {
        const errorData = await response.json();
        setError(errorData.message || '닉네임 수정 실패');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('서버와의 통신 오류');
    }
  };

  return (
    <div className="profile-field">
      <button id="updateButton" onClick={handleUpdate}>
        수정하기
      </button>
      {error && <p className="error-message">{error}</p>}
      {toastVisible && <div className="toast-message">수정이 완료되었습니다.</div>}
    </div>
  );
};

export default ProfileUpdateButton;
