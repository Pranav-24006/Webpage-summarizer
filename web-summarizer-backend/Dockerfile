# Use the official Python image.
FROM python:3.11-slim

# Set working directory
WORKDIR /app

# Copy the app code
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port your Flask app runs on
EXPOSE 8080

# Set the entrypoint
CMD ["python", "app.py"]
