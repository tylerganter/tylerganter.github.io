import os
from _website.main import app

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    # main.app.run(host='0.0.0.0', port=port)
    app.run(debug=True)
