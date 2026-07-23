"""
FastApi
- 파이썬으로 API 서버를 만들 수 있게 해주는 웹 프레임워크
- 함수 하나에 URL 경로를 연결하기만 하면 API 하나가 완성
- 타입 힌트만 붙여도 자동으로 값 검증 + API문서(Awagger UI)까지 만들어줌
- uvicorn : FastAPI로 만든 앱을 실제로 실행시켜주는 서버 프로그램 (멈추려면 ctrl+c)
"uv add fastapi uvicorn"로 설치
uvicorn main:app --reload 로 실행
브라우저에서 http://127.0.0.1:8000접속 가능
http://127.0.0.1:8000/docs 접속하면 Swagger UI로 자동생성
"""

from fastapi import FastAPI, HTTPException
import pymysql

app = FastAPI()

"""
DB 연결 함수
- API 요청이 올 때마다 접속해야함
- 매번 연결 코드를 반복해서 쓰지 않도록, 연결하는 부분만 함수로 따로 빼둠
"""
def get_connection():
    return pymysql.connect(
        host="127.0.0.1", user="root", password="qwer1234", db="test_db",
        cursorclass=pymysql.cursors.DictCursor
    )

@app.get("/")
def read_root():
    return {"message" : "회원관리 API"}

"""
CRUD를 HTTP 메서드로 표현
- 09에서 pymysql로 직접했던 CRUD를, API에서는 HTTP메서드로 구분해서 표현
- GET : 조회 - 데이터가져오기
- POST : 생성 - 새 데이터 추가
- PUT : 수정 - 수정
- DELETE :삭제 - 삭제
FastAPI에선 @app.get(...), @app.post(...)처럼 데코레이터만 바꿈됨
"""

"""
Read - 회원 목록 / 한 명 조회 API
"""
@app.get("/members")
def read_members():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM member")
    rows = cur.fetchall()
    conn.close()
    return rows


"""
경로 파라미터 (path parameter)
- URL 경로 자체에 값을 넣어서 전달하는 방식 - /members/3처럼 회원 id를 경로에 직접 포함
- 함수 파라미터 이름과 {}안 이름을 똑같이 맞추면  FastAPI가 자동으로 값을 넣어줌
- (member_id : int)를 붙이면 문자열이 와도 자동으로 정수로 변환
"""

@app.get("/members/{member_id}")
def read_root(member_id:int):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM member WHERE id = %s", (member_id,))
    rows = cur.fetchone()
    if rows is None:
            conn.close()
            raise HTTPException(status_code=404, detail="해당 id의 회원이 없습니다.")
    conn.close()
    return rows

"""
요청 본문과 Pydantic 모델
- 회원 등록처럼 여러 값을 한 번에 보내야 할 땐,  URL이 아니라 요청 본문에 담아서 보냄
- POST/PUT 요청에서 사용
- FastAPI에서는 pydantic의 BaseModel로 "이 요청 본문엔 어떤 값들이 와야하는지" 미리 설계
"""
from pydantic import BaseModel

class Member(BaseModel):
    name: str
    address: str
    email: str
    phone_number: str
    job: str
    company: str


"""
Create - 회원등록 API
- POST 요청의 본문으로 Member 데이터가 오면 파라미터에 member:Member 라고만 적어도 FastAPI가 자동으로 검증
- member.model_dump() : Pydantic 모델을 다시 딕셔너리로 변환 - 응답 만들 때 사용
"""

@app.post("/members")
def create_member(member:Member):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""INSERT INTO member (name, address, email, phone_number, company, job)
                VALUES(%s, %s, %s, %s, %s, %s)
                """, (member.name, member.address, member.email, member.phone_number, member.company, member.job))
    conn.commit()
    new_id = cur.lastrowid # 방금 추가된 행의 id (member 테이블의 AUTO_INCREMENT 값)
    conn.close()
    return {"id" : new_id, **member.model_dump()}

"""
Update - 회원수정 API / DELETE - 회원삭제 API
- 수정/삭제 모두 "어떤회원인지" 경로 파라미터(member_id) 사용
- 수정은 Create처럼 본문(Member)도 함께 받고, 삭제는 본문 없이 경로 파라미터만
"""
from fastapi import HTTPException
@app.put("/members/{member_id}")
def update_member(member_id: int, member: Member):
    conn = get_connection()
    cur = conn.cursor()
    # 해당 id가 없다면 에러
    cur.execute("SELECT * FROM member WHERE id = %s", (member_id,))
    if cur.fetchone() is None:
        conn.close()
        raise HTTPException(status_code=404, detail="해당 id의 회원이 없습니다.")

    cur.execute(
        """UPDATE member
        SET name = %s, address = %s, email = %s, phone_number = %s, company = %s, job = %s
        WHERE id = %s""",
        (member.name, member.address, member.email, member.phone_number, member.company, member.job, member_id),
    )
    conn.commit()
    conn.close()
    return {"id": member_id, **member.model_dump()}


@app.delete("/members/{member_id}")
def delete_member(member_id: int):
    conn = get_connection()
    cur = conn.cursor()
# 해당 id가 없다면 에러
    cur.execute("SELECT * FROM member WHERE id = %s", (member_id,))
    if cur.fetchone() is None:
        conn.close()
        raise HTTPException(status_code=404, detail="해당 id의 회원이 없습니다.")

    cur.execute("DELETE FROM member WHERE id = %s", (member_id,))
    conn.commit()
    conn.close()
    return {"id": member_id, "message": "deleted"}

"""
과제
기간 29
09과제를  fastapi or express로 각각의 api 만들기
- 주제_이름 <- 앞에서 진행한 코드에 붙여도 상관없음
"""