"""
Streamlit
- 파이썬 코드만으로 웹 화면(버튼, 입력창, 표, 그래프 등)을 만들 수 있게 해주는 라이브러리
- HTML/CSS/JS를 몰라도 프론트엔드 화면을 완성할 수 있음

uv add streamlit 로 설치
실행은 streamlit run app.py 
(주의! FastAPI 호출시 서버가 켜져 있는 상태여야 하므로 uvicorn main:app --reload)
"""
import streamlit as st
import requests

st.title("회원 관리 대시보드")
response = requests.get("http://localhost:8000/members")
members = response.json()
st.dataframe(members)


