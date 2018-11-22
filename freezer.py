import sys, os
from _website.main import freezer

if __name__ == '__main__':
    if '--clean' in sys.argv[1::]:
        """Delete the 'cached' files in static"""
        repo_path = os.path.abspath(os.path.dirname(__file__))
        static_path = os.path.join(repo_path, 'static')

        import subprocess
        subprocess.call(['rm', '-rf', static_path])

    freezer.freeze()