#!/usr/bin/env python

from distutils.core import setup

setup(name='MiniSom',
  version='0.1',
  description='Minimalistic implementation of the Self Organizing Maps (SOM)',
  author='sai manoj',
  package_data={'': ['Readme.md']},
  include_package_data=True,
  license="CC BY 3.0",
  py_modules=['minisom'],
  requires = ['numpy']
 )