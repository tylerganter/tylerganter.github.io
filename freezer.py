import sys, os
import argparse
from _website.main import freezer

if __name__ == '__main__':
    # # TODO replace with this
    # parser = argparse.ArgumentParser()
    # parser.add_argument(
    #     '--clean',
    #     help = 'Delete the "cached" files in static',
    #     required = False
    # )
    # ## parse all arguments
    # args = parser.parse_args()
    # arguments = args.__dict__
    # clean = arguments.pop('clean')

    if '--clean' in sys.argv[1::]:
        """Delete the 'cached' files in static"""
        repo_path = os.path.abspath(os.path.dirname(__file__))
        static_path = os.path.join(repo_path, 'static')

        import subprocess
        subprocess.call(['rm', '-rf', static_path])

    freezer.freeze()