FROM python
ARG VERSION=prize_gen_1
COPY ${VERSION}.py app.py
RUN pip install flask
RUN pip install requests
ENTRYPOINT ["python", "app.py"]
