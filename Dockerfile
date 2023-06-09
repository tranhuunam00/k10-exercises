FROM node:18-alpine


# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép các tệp cấu hình và mã nguồn của ứng dụng vào thư mục /app trên hình ảnh Docker
COPY package*.json ./
COPY . .

# Cài đặt các phụ thuộc của ứng dụng
RUN npm install

EXPOSE 9003
EXPOSE 9003
# Chạy ứng dụng NestJS và Redis khi Docker container được khởi động
CMD [ "npm", "run", "start" ]